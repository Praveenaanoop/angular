import { Component, OnInit } from '@angular/core';
import { FootService } from '../myservices/foot.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:any;
  constructor(private fs:FootService) { }

  ngOnInit() {
    this.footer=this.fs.getfooterdata();
  }

}
