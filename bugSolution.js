The solution involves using a unique key for each item in the FlatList, even if the data itself hasn't changed. This ensures the FlatList correctly identifies each item and prevents view recycling conflicts.  Here's the corrected code:

```javascript
const MyComponent = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const renderItem = ({ item }) => {
    return (
      <View style={{
        height: item * 50, 
        backgroundColor: 'lightblue',
      }}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Unique key for each item
    />
  );
};
```

By using the index as the key, we ensure that each item has a unique identifier, solving the rendering issue.  This approach is generally sufficient for simple dynamic styling.  For more complex cases, consider using a library like `react-window` for advanced virtualisation techniques.