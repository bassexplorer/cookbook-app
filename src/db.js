import firebase from "@/firebase";
import "firebase/firestore";

const db = firebase.firestore();

const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

db.settings({ timestampsInSnapshots: true });

export default db;
