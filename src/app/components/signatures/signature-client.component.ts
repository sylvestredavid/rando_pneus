import {Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature-client',
  template : ' <signature-pad #signaturePad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>'
})
export class SignatureClientComponent {

  @ViewChild('signaturePad') signaturePad: SignaturePad;

  signaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 1,
    maxWidth: 2,
    canvasWidth: 300,
    canvasHeight: 200
  };

  constructor( ) {

  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
  }




  getSignature(): string{
    return this.signaturePad.toDataURL();
  }

}
