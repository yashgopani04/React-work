import conf from "../conf/conf";

import {Client, ID, Database, Storage, Query} from 'appwrite';

export class DatabaseService{

    client = new Client();
    databases;
    bucket;

    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Database(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){

        try {

           return await this.databases.createDocument(
            conf.appwriteDatabaseID,
            conf.appwriteCollectionId,
            slug,
            {
            
                title,
                content,
                featuredImage,
                status,
                userId,

            }

           ) 
            
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){

        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {

                    title,
                    content,
                    featuredImage,
                    status,

                }

            )
            
        } catch (error) {
            throw error;
        }

    }

    async deletePost(slug){

        try {

           await this.databases.deleteDocument(

                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
            )
            return true
            
        } catch (error) {
            throw error;

            return false
        }

    }

    async getPost(slug){

        try {

            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            
            throw error;
            return false
        }

    }

    async getPosts(queries = [Query.equal('status','active')]){

        try {

            return await this.databases.listDocuments(

                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                queries,
                100,
                0

            )            
        } catch (error) {
            throw error;
            return false;
        }

    }

    // file upload service

    async uploadFile(file){
        try {

           return await this.bucket.createFile(

            conf.appwriteBucketId,
            ID.unique(),
            file
           )
            
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){

        try {

            await this.bucket.deleteFile(

                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            throw error;
            return false;
        }
    }

    getFilePreview(fileId){

        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } 

}


const service = new DatabaseService()
export default service