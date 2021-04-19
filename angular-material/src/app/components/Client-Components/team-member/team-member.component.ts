import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientServiceService } from 'src/app/client_service/client-service.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css'],
})
export class TeamMemberComponent implements OnInit {
  public fbFormGroup = this.fb.group({
    c_member_name: ['', Validators.required],
    c_member_email: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private clientService: ClientServiceService
  ) {}

  ngOnInit(): void {}
  submitForm() {
    console.log('form work');
    const data = this.fbFormGroup.value;
    console.log(data);
    this.clientService.createTeamMember(data).subscribe((res) => {
      console.log(res);
      alert('submited successfully !!')
    });
  }
}
