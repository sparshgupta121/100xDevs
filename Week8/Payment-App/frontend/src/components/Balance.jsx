export const Balance = ({ value }) => {
    return (
        <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">Your balance:</span>
            <span className="text-lg font-semibold text-green-600">₹ {value}</span>
        </div>
    );
};
