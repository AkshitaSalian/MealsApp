//create a class Place
class Place {
  constructor(name, location, address, imageUrl) {
    this.name = name;
    this.location = location;
    this.imageUrl = imageUrl;
    this.address = address;
    this.id = Math.random().toString(36).substring(2, 9);
  }
}
