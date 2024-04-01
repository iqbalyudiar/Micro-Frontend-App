import React, { useState } from 'react';

interface Item {
    name: string;
    completed: boolean;
}

const List: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [newItem, setNewItem] = useState<Item>({
        name: '',
        completed: false,
    });

    const handleAddItem = () => {
        if (newItem.name.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem({
                name: '',
                completed: false,
            });
        }
    };

    const handleToggleItem = (index: number) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full"
                    placeholder="Add item..."
                    value={newItem.name}
                    onChange={(e) => setNewItem({name: e.target.value, completed: false})}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r"
                    onClick={handleAddItem}
                >
                    Add
                </button>
            </div>
            <ul className="list-disc pl-8">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mr-2"
                            onChange={() => handleToggleItem(index)}
                        />
                        <span className={`${item.completed ? 'line-through' : ''}`}>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;