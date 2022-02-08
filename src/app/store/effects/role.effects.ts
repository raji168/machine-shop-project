// addLab$ = createEffect(() => this.actions$.pipe(
//     ofType(LabActions.addLab),
//     switchMap(action => this.labApi.add(action.Lab).pipe(
//         map(lab => {
//             this.toastr.success('Lab Added Successfully', 'Success', { timeOut: 4000 });
//             return LabActions.labAdded({lab });
//         }),
//         catchError(err => {
//             this.toastr.error('Error while creating lab, Please try again', 'Error', { timeOut: 4000 });
//             return of(LabActions.labAddFail());
//         })
//     )),  


// )
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleEffects{

}