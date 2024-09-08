import logo from '../assets/logo.png'; // Adjust the path as needed

export const Appbar = ({ firstname, UserAlphabet }) => {
    return (
        <div className="shadow-md bg-green-500 text-white flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="App Logo" className="h-10" />
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-gray-200 text-gray-800 rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold">
                    {UserAlphabet}
                </div>
                <span className="text-lg">Hello, {firstname}</span>
            </div>
        </div>
    );
};
