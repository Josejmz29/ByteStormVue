import * as signalR from '@microsoft/signalr';

export const connectionApi = async () => {
    const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:5021/signalHub")
    .withAutomaticReconnect()
    .build();
    try {
        await connection.start();
        console.log("SignalR Connected.");
        return connection;
    } catch (err) {
        console.log(err);
        setTimeout(() => connectionApi(), 5000);
    }

    return connection;
}

   


