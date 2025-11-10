abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, public burst: number) {
    super(cameraMode, filter); //
  }

  getSepia(): void {
    console.log("Sepia");
  }
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

// const oa = new TakePhoto("test", "Test");
