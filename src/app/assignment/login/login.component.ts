import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loginFailed = false;

  login(form: FormGroup) {
    const lastUrl = this.route.snapshot.queryParamMap.get('lastUrl');
    this.auth.login(form.value).subscribe((didLoggedIn) => {
      if (didLoggedIn) this.router.navigate([lastUrl || '/']);
      else {
        this.loginFailed = true;
        form.reset();
      }
    });
  }

  ngOnInit(): void {}
}
