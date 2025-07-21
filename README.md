# ShopScan

This repository contains the initial plan for building the **ShopScan** shopping list app from scratch. The app's goal is to scan product price tags, extract the item name and price automatically, manage a shopping list, and show a running total.

## 1. Core Features

1. **Item Capture via Camera**
   - Provide a camera interface for photographing the product’s price tag.
   - Detect a clear region of the photo for the price tag and offer guidance.
   - Optionally save the raw photo for later review.

2. **Automatic Text Extraction**
   - Use OCR to read the product name and price from the captured image.
   - Libraries: Google ML Kit or Tesseract (with wrappers for the chosen framework).
   - Parse recognized text to locate the price and extract the product name.

3. **Manual Confirmation**
   - After OCR, show an editable form so the user can confirm or correct the product name, quantity, and price.
   - Display the captured image for reference.

4. **Shopping List Management**
   - Store each product item (name, quantity, unit price, photo) in a list.
   - Provide a UI list view showing all items with checkboxes to mark as purchased.
   - Support manual item entry or edits when needed.

5. **Total Calculation**
   - Maintain a running total (quantity × price for each item).
   - Update the total whenever items are added, edited, or removed.

6. **Local Storage and Offline Use**
   - Store all data locally (e.g., SQLite) so the app works offline.
   - Persist photos alongside item data and load the stored list on startup.

## 2. Suggested Technology Stack

- **Mobile Framework**: React Native or Flutter.
- **OCR**: Google ML Kit Text Recognition or Tesseract.
- **Storage**: SQLite or similar local database.

## 3. High-Level Architecture

1. **Camera Module** – captures photos and passes them to OCR.
2. **OCR/Parsing Module** – extracts text and parses the price and product name.
3. **Data Layer** – local database for item records (name, price, quantity, image path, purchased flag).
4. **UI Layer** – list screen, add/scan screen, and item detail screen.
5. **Total Calculation** – derived from stored items and updated whenever data changes.

## 4. Step-by-Step Development Plan

1. Set up the mobile project (React Native or Flutter).
2. Create basic screens (list, camera/scan, item detail).
3. Implement local storage with SQLite or another local database.
4. Integrate camera and OCR to extract price and item name.
5. Add item management logic: add, edit, delete items.
6. Calculate and display the total.
7. Test OCR accuracy and offline functionality.

## 5. Future Enhancements (Optional After MVP)

- Price history or analytics per item.
- Synchronization with cloud storage or accounts.
- Sharing or exporting the shopping list.
- Multi-language support.

