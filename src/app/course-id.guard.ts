import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseIdGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +next.params.id;

    if (isNaN(id) || id < 1) {
      this.router.navigate(['/courses']);
      return false;
    }

    return true;
  }
}
