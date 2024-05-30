/**
 * ⚠️ FSD
 *
 * Its hack way to export redux inferring types from scr/app
 * and use it in src/shared/lib/react-redux.ts
 */

declare type RootState = import('./src/app/appStore').RootState;

declare type AppDispatch = import('./src/app/appStore').AppDispatch;
