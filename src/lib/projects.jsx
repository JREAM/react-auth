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

const createProject = async (data) => {
  console.log(data)
  await addDoc(collection(db, 'projects'), DataTransfer)
}

const getProjects = async () => {
  const querySnap = await getDocs(collection(db, 'projects'))
  let data = []
  querySnap.forEach((doc) => {
    data.push(doc.data())
    // console.log(doc.id, " => ", doc.data())
    // console.log(doc.data().title)
  })
  return data;
}

export {
  createProject,
  getProjects,
}
