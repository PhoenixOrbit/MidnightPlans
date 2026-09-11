import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';

// Uploads an image file to Storage under `${folder}/${Date.now()}-${file.name}`
// and returns its public download URL.
export async function uploadImage(folder, file) {
  const path = `${folder}/${Date.now()}-${file.name}`;
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}

export async function deleteImageByUrl(url) {
  if (!url) return;
  try {
    const fileRef = ref(storage, url);
    await deleteObject(fileRef);
  } catch {
    // Image may already be gone or not a Storage URL (e.g. seed data) — safe to ignore.
  }
}

export function addItem(collectionName, data) {
  return addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export function updateItem(collectionName, id, data) {
  return updateDoc(doc(db, collectionName, id), data);
}

export function deleteItem(collectionName, id) {
  return deleteDoc(doc(db, collectionName, id));
}
