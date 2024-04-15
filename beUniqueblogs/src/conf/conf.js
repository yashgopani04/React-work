const conf = {

    appwriteUrl : String(import.meta.esv.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.esv.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID : String(import.meta.esv.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.esv.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.esv.VITE_APPWRITE_BUCKET_ID)

}



export default conf