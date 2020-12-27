import { Component, Input, OnInit } from '@angular/core';
import * as TwillioVideo from 'twilio-video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() token: string;

  constructor() {}

  ngOnInit(): void {
    TwillioVideo.connect(this.token, {
      video: true,
      audio: true,
      name: 'test',
    }).then((room) => {
      // Attaching Video for self
      TwillioVideo.createLocalVideoTrack().then((track) => {
        document.getElementById('localmedia').appendChild(track.attach());
      });

      // Attaching video for the host
      room.participants.forEach((participant) => {
        participant.tracks.forEach((publication) => {
          if (publication.isSubscribed) {
            const track = publication.track;
            document.getElementById('remotemedia').appendChild(track.attach());
          }
        });
      });
      console.log('successfully joined the room');
    });
  }
}
