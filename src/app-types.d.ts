/**
 * ⚠️ FSD
 *
 * Its hack way to export redux infering types from scr/app
 * and use it in src/shared/model/use-app-dispatch.ts &
 * src/shared/model/use-app-selector.ts
 */

declare type RootState = import('./src/app/appStore').RootState;

declare type AppDispatch = import('./src/app/appStore').AppDispatch;
