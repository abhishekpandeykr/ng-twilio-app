import { TwilioAuthService } from './twilio-auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twilio-video-app';
  chatRoom: FormGroup;
  token: string = null;
  constructor(
    private fb: FormBuilder,
    private twilioService: TwilioAuthService
  ) {
    this.chatRoom = this.fb.group({
      roomName: new FormControl(),
      displayName: new FormControl(),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    const body = {
      identity: form.value.displayName,
    };
    this.twilioService
      .validateRoom(body)
      .subscribe((res: string) => (this.token = res));
  }
}
