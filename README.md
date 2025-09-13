# Timeline Component

A React-based interactive timeline component for visualizing project tasks and events across horizontal lanes. Built as part of an Airtable coding assignment, this component efficiently arranges timeline items in compact, space-efficient lanes while providing an intuitive user experience.

## Features

- **Compact Lane Assignment**: Items are automatically arranged in horizontal lanes to maximize space efficiency
- **Interactive Timeline Items**: Click to edit item names inline with keyboard shortcuts (Enter to save, Escape to cancel)
- **Hover Tooltips**: Rich tooltips showing item details including duration and formatted date ranges
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Date Visualization**: Monthly markers along the timeline for easy date reference
- **Color-coded Lanes**: Each lane has a distinct color for easy visual separation
- **Legend**: Visual legend showing lane assignments and task counts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
npm start
```

This will start a development server and open the timeline in your default browser. The application will render the sample data from `src/timelineItems.js`.

## Project Structure

```
src/
├── components/
│   ├── DateAxis.jsx          # Timeline date markers
│   ├── Timeline.jsx          # Main timeline component
│   ├── TimelineHeader.jsx    # Header with project stats
│   ├── TimelineItem.jsx      # Individual timeline item with editing
│   └── TimelineLegend.jsx    # Lane color legend
├── hooks/
│   └── useTimelineData.js    # Timeline data processing logic
├── utils/
│   ├── assignLanes.js        # Lane assignment algorithm
│   ├── calculateDuration.js  # Duration calculation utilities
│   └── formatDateRange.js    # Date formatting utilities
├── timelineItems.js          # Sample data
├── index.js                  # Application entry point
└── app.css                   # Global styles
```

## Technical Implementation

### Lane Assignment Algorithm

The core of the timeline uses a custom lane assignment algorithm (`assignLanes.js`) that:

1. Sorts items by start date
2. Places each item in the first available lane where it doesn't overlap with existing items
3. Creates new lanes when no existing lane can accommodate an item

### Data Processing

The `useTimelineData` hook handles:

- Lane assignment using the provided algorithm
- Date range calculation with padding for better visualization
- Position calculations for timeline items based on date ranges
- Monthly marker generation for the date axis

### Interactive Features

- **Inline Editing**: Click any timeline item to edit its name
- **Keyboard Navigation**: Enter to save, Escape to cancel editing
- **Hover Effects**: Rich tooltips with item details and smooth animations

## What I Like About This Implementation

### 1. **Clean Architecture**

The code is well-organized with clear separation of concerns. Each component has a single responsibility, and the custom hook pattern keeps data processing logic separate from UI components.

### 2. **Efficient Lane Assignment**

The lane assignment algorithm is simple yet effective. It provides optimal space utilization while being easy to understand and maintain.

### 3. **Smooth User Experience**

The inline editing feature feels natural and responsive. The hover tooltips provide rich information without cluttering the interface.

### 4. **Modern React Patterns**

Uses functional components with hooks, proper state management, and memoization for performance optimization.

## What I Would Change If I Did It Again

### 1. **Enhanced Interactivity**

- **Drag and Drop**: Allow users to drag timeline items to change their dates
- **Zoom Functionality**: Implement zoom in/out for better navigation of long timelines
- **Resize Items**: Allow users to resize items by dragging their edges

### 2. **Better Performance for Large Datasets**

- **Virtualization**: Implement virtual scrolling for timelines with hundreds of items
- **Lazy Loading**: Load timeline data progressively
- **Memoization**: Add more granular memoization for expensive calculations

### 3. **Improved Data Management**

- **State Management**: Use a more robust state management solution (Redux, Zustand) for complex interactions
- **Data Persistence**: Add local storage or API integration for saving changes
- **Undo/Redo**: Implement undo/redo functionality for timeline edits

### 4. **Enhanced Visual Design**

- **Customizable Themes**: Allow users to choose different color schemes
- **Item Categories**: Add support for different item types with distinct visual styles
- **Timeline Density**: Allow users to adjust the density of date markers

### 5. **Better Mobile Experience**

- **Touch Gestures**: Add swipe gestures for mobile navigation
- **Responsive Layout**: Improve mobile layout and touch interactions
- **Mobile-specific UI**: Optimize the interface for smaller screens

## Design Decisions

### 1. **Technology Stack**

- **React**: Chosen for its component-based architecture and excellent ecosystem
- **Tailwind CSS**: For rapid, consistent styling without custom CSS
- **date-fns**: For reliable date manipulation and formatting
- **Parcel**: For simple, zero-configuration bundling

### 2. **Lane Assignment Strategy**

I used the provided `assignLanes.js` algorithm because it's simple, efficient, and produces good results. The greedy approach of placing items in the first available lane works well for most use cases and is easy to understand.

### 3. **Visual Design**

- **Color Palette**: Used a vibrant but accessible color palette for lane differentiation
- **Typography**: Clean, readable fonts with appropriate hierarchy
- **Spacing**: Consistent spacing using Tailwind's design system
- **Shadows and Gradients**: Subtle visual effects to create depth without distraction

### 4. **Interaction Patterns**

- **Click to Edit**: Familiar pattern that users expect from modern interfaces
- **Hover Tooltips**: Non-intrusive way to show additional information
- **Keyboard Shortcuts**: Standard shortcuts (Enter/Escape) for better accessibility

### 5. **Inspiration Sources**

I drew inspiration from:

- **Gantt Charts**: For the horizontal timeline layout and lane concept
- **Project Management Tools**: Like Asana and Monday.com for the clean, modern interface
- **Calendar Applications**: For the date axis and time-based visualization
- **Modern Web Applications**: For the overall aesthetic and interaction patterns

## Testing Strategy

If I had more time, I would implement the following testing approach:

### 1. **Unit Tests**

- **Utility Functions**: Test `assignLanes`, `calculateDuration`, and `formatDateRange` with various inputs
- **Custom Hooks**: Test `useTimelineData` with different item configurations
- **Component Logic**: Test individual component behaviors and state management

### 2. **Integration Tests**

- **Timeline Rendering**: Test that items are correctly positioned and styled
- **Interactive Features**: Test editing, hover states, and keyboard navigation
- **Data Flow**: Test the complete data flow from items to rendered timeline

### 3. **Visual Regression Tests**

- **Screenshot Testing**: Capture and compare visual states across different scenarios
- **Responsive Testing**: Test the component across different screen sizes
- **Cross-browser Testing**: Ensure consistent appearance across browsers

### 4. **Performance Tests**

- **Large Dataset Testing**: Test with hundreds or thousands of timeline items
- **Memory Usage**: Monitor memory consumption during interactions
- **Rendering Performance**: Measure render times and identify bottlenecks

### 5. **User Testing**

- **Usability Testing**: Test the editing workflow with real users
- **Accessibility Testing**: Ensure the component works with screen readers and keyboard navigation
- **Mobile Testing**: Test touch interactions and mobile-specific features

### 6. **Test Tools**

- **Jest**: For unit and integration testing
- **React Testing Library**: For component testing
- **Cypress**: For end-to-end testing
- **Storybook**: For component documentation and visual testing
- **Lighthouse**: For performance and accessibility auditing
