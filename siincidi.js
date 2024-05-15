class Record {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  // Method to display record information
  display() {
    console.log(`Record ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Content: ${this.content}`);
  }

  // Method to update record content
  updateContent(newContent) {
    this.content = newContent;
    console.log('Content updated successfully.');
  }
}

// Usage
const myRecord = new Record(102, 'My Title', 'This is the record content.');
myRecord.display();
myRecord.updateContent('This is the new content.');
