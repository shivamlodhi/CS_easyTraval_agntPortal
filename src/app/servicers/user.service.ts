import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
    providedIn: 'root'
})

export class UserService {

    userName: any;
    listCollection: Observable<any>;
    User: Observable<any[]>;

    constructor(
        private afs: AngularFirestore,
        private firebaseAuth: AngularFireAuth
    ) { }

    getUserName(userId: string) {
        this.listCollection = this.afs
      .collection<any>('passengers').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    return this.listCollection;
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

    async updatUser(usetId , userDetails ){
        await this.afs.doc('passengers/' + usetId).set( userDetails );
    }

    signIn(email, password) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }
}