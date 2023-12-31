import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { LoginScreenComponent } from '../screen/login-screen/login-screen.component'; 


export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('JWT');
  const router = inject(Router)
  console.log('token : ', token)
  console.log('curent route : ', route)
  console.log('current state : ', state)
  if(token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
