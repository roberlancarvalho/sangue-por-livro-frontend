import { RegisterComponent } from './pages/register/register.component';
import { BookComponent } from './pages/book/book.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './books/books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro/:{id}', component: BookComponent },
  { path: 'livros', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
