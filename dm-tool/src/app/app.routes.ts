import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'new-player',
        loadComponent: () => import('./pages/new-player-help-guide/new-player-help-guide.component').then(m => m.NewPlayerHelpGuideComponent)
    }
];
