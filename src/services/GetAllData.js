import { useState, useEffect } from "react";
import firebase from './Config';

export default function GetAllData(collectionNames){
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const promises = collectionNames.map(collectionName => { 
      return firebase.firestore().collection(collectionName).get().then(data => { return data.docs.map(doc => doc.data())});
    });

    Promise.all(promises)
      .then(promises => setData(promises))
      .catch(e => {
        setError(e);
        throw e;
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}

