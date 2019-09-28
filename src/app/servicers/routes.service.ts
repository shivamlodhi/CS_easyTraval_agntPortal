import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({
    providedIn: 'root'
})

export class RouteService {

    userName: any;
    listCollection: Observable<any>;
    User: Observable<any[]>;

    constructor(
        private afs: AngularFirestore,
    ) { }

    getAllRourtes() {
        this.listCollection = this.afs
            .collection<any>('routes').snapshotChanges().pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }))
            );
        return this.listCollection;
    }

    getTimeTables(id) {
        this.listCollection = this.afs
            .collection<any>('routes/' + id + '/timeTables').snapshotChanges().pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }))
            );
        return this.listCollection;
    }

    getMainStops(id) {
        return this.afs.collection<any>('routes').doc(id).snapshotChanges()
            .pipe(
                map(a => {
                    return a.payload.data();
                })
            );
    }

    setTurn(turn, id) {
        this.afs.collection<any>('routes/' + id + '/timeTables').add(turn);
    }
    checkPhoneNum(userPhoeNumber) {
        this.User = this.afs
            .collection<any>('passengers', ref => ref
                .where('phoneNumber', '==', userPhoeNumber))
            .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id: id, data: data };
                }))
            );
        return this.User;
    }

    createPolicy(policy: any) {
        return this.afs.collection('passengers').add(policy);
    }

    async updatUser(usetId, userDetails) {
        await this.afs.doc('passengers/' + usetId).set(userDetails);
    }

    getStops(){
        this.listCollection = this.afs
            .collection<any>('stops').snapshotChanges().pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }))
            );
        return this.listCollection;
    }
}