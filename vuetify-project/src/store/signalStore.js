import { defineStore } from 'pinia';
import { connectionApi } from "../api/signalapi";


export const useSignalStore = defineStore('signal', {
    state: () => ({
        connection: null,
    }),
    
    actions: {
        setConnection() {
        this.connection = connectionApi();
        
        },
    
        clearConnection() {
        this.connection = null;
        
        },
    },
    });