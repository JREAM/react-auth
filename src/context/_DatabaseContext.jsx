import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore"
import { db } from "../firebase-config";

// @TODO This is not legitimate because I have no where statement

const create = async (collection, document, data = {}) => {
  await setDoc(doc(db, collection, document), data)
}

const update = async (collection, document, data = {}) => {
  // There is no WHERE statement, wont work
  await updateDoc(doc(db, collection, document), data)
}

const remove = async (collection, document) => {
  // This does not delete subcollections (but they wont get queries)
  await deleteDoc(doc(db, collection, document))
}

const get = async (collection, document) => {
  const docSnapshot = await getDoc((db, collection, document))
  if (docSnapshot.exists()) {
    return docSnapshot.data()
  }
  return false
}

const getAll = async(collection) => {
  // This gets all, but a WHERE statement can be added
  const querySnapshot = await getDocs(collection(db, collection))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
  })
}


export {
  create,
  update,
  remove,
  get,
  getAll
}
