import { CanActivateFn } from '@angular/router';

export const checkoutGaurdGuard: CanActivateFn = (route, state) => {
  return true;
};
