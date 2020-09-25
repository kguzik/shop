import { useState, useEffect } from "react";
import firebase from './Config';

export default function GetData(collectionName){
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const firebaseData = await firebase.firestore()
          .collection(collectionName)
          .get()
          .then(data => { return data.docs.map(doc => doc.data()) }
        );

        setData(firebaseData);

      } catch(e) {
        setError(e); 
      } finally {
        setLoading(false); 
      }
    };
  
    init();
  
  }, [collectionName]);

  return { data, error, loading };
}

