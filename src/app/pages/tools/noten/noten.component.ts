import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {share} from 'rxjs';

@Component({
  selector: 'app-noten',
  templateUrl: './noten.component.html',
  styleUrls: ['./noten.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotenComponent {

  protected readonly max0 = new FormControl(null);
  protected readonly max = this.max0.valueChanges.pipe(share());

  protected calc(max: number | null, p: number): string {
    if (max === null) {
      return ''
    }

    return `${Math.round(max * p) / 100}`;
  }
}
