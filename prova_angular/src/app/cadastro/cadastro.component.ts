import { Teams } from './team';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newTeams : Teams = {} as Teams
  teamsList : Teams[] = []

  saveTeam(form: NgForm){
    this.teamsList.push(this.newTeams)
    this.newTeams = {} as Teams
    form.resetForm()
  }

}
