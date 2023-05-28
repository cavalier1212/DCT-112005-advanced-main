import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  console.log('in authGuard...');
  if(localStorage.getItem('token')){
    return true;
  }

  // return router.parseUrl('/login');
  // console.log('parseUrl =  ', router.parseUrl('/login'));
  // return false;
  return true;
};
