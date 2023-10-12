require('dotenv').config(); // environment variables

const ethers = require('ethers');


const contractAddress = 'CONTRACT_ADDRESS';
const contractABI = [
    
];
const infuraUrl = 'INFURA_PROJECT_URL';
const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.JsonRpcProvider(infuraUrl);

// Initialize a wallet
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Deposit funds
async function depositFundsExample(amount) {
    try {
        const tx = await contract.deposit({
            value: ethers.utils.parseEther(amount.toString())
        });
        await tx.wait();
        console.log(`Deposited ${amount} ETH successfully.`);
    } catch (error) {
        console.error('Error depositing funds:', error);
    }
}

// Withdraw funds
async function withdrawFundsExample(amount) {
    try {
        const tx = await contract.withdraw(ethers.utils.parseEther(amount.toString()));
        await tx.wait();
        console.log(`Withdrawn ${amount} ETH successfully.`);
    } catch (error) {
        console.error('Error withdrawing funds:', error);
    }
}

// Check balance
async function checkBalanceExample() {
    try {
        const balance = await contract.getBalance();
        console.log(`Your balance: ${ethers.utils.formatEther(balance)} ETH`);
    } catch (error) {
        console.error('Error checking balance:', error);
    }
}

// Owner withdraws funds
async function ownerWithdrawFundsExample(amount) {
    try {
        const tx = await contract.ownerWithdraw(ethers.utils.parseEther(amount.toString()));
        await tx.wait();
        console.log(`Owner withdrawn ${amount} ETH successfully.`);
    } catch (error) {
        console.error('Error in owner withdrawal:', error);
    }
}

// Example/tests
// depositFundsExample(1); // Deposit 1 ETH
// withdrawFundsExample(0.5); // Withdraw 0.5 ETH
// checkBalanceExample(); // Check your balance
// ownerWithdrawFundsExample(2); // Owner withdraws 2 ETH
