import { useEffect, useRef, useState } from 'react'

// we import the data base
import { db } from '../firebase/config'

//firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
    const [documents, setdocuments] = useState(null);

    // set up query
    const q = useRef(_q).current

    useEffect(() => {
        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...q))
        }

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            setdocuments(results)
        })

        return () => unsub()
    }, [c, q])

    return { documents }
}