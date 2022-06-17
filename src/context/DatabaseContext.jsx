import { createContext, useContext, useEffect, useState } from "react"
import {
  query,
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../firebase-config";

const databaseContext = createContext()

/**
 * These calls are generic in order to set try/catch callbacks
 * within the Components for the status
 */
export function DatabaseContext({ children }) {
  const [user, setUser] = useState({})

  // Useage is to wrap in try/catch
  const updateUser = async(user, authProvider = 'local') => {
    const q = query(collection(db, 'users'), where("uid", "==", user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      // If No User Exists, Create a record for Google
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider,
        email: user.email,
      })
    }
  }

  const get = async(document, value) => {
    const docRef = doc(db, document, value)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return false;
    }
  }

  const getMany = async(document, document) => {
    // @TODO: How to pass in custom where
    const q = query(collection(db, document), where("capital", "==", true));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
    // querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    // });
  }

  const create = async(document, dataObject) => {
    await addDoc(collection("db", document), dataObject)
  }

  const update = async(document, id, dataObject) => {
    const recordRef = doc(db, document, id)
    await updateDoc(recordRef, dataObject)
  }

  const remove = async(document, id) => {
    await deleteDoc(doc(db, document, id))
  }

  const removeField = async(document, id, fieldsArray) => {
    const recordRef = doc(db, document, id);
    // Remove the 'capital' field from the document
    const deleteFields = {}
    for (const key of fieldsArray) {
      deleteFields[key] = deleteField() // not sure this will work as a function maybe its already executed when called. Hopefully the argument takes a function rather than function results.
    }
    await updateDoc(cityRef, deleteFields);
  }

  return (
    <databaseContext.Provider
      value={{
        update,
        create,
        remove,
        removeField,
        get,
        getMany,
      }}
    >
      {children}
    </databaseContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
