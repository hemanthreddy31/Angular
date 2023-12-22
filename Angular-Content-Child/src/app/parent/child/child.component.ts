import { Component, ContentChild, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paragraphEl: ElementRef;

  @ContentChild(TestComponent) testEl: TestComponent;

  @ContentChildren('para') paraElements: QueryList<ElementRef>;

  @ContentChildren(TestComponent) testElements: QueryList<TestComponent>;

  StyleParagraph(){
      console.log(this.paragraphEl.nativeElement);
      console.log(this.testEl.name);
   }
}