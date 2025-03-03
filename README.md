# **BlockFund - Decentralized Crowdfunding Platform**

## **Inspiration**
Traditional crowdfunding platforms like **Kickstarter** and **GoFundMe** charge **high platform fees** and impose **regional restrictions**, limiting access to funding for many individuals worldwide. 

**BlockFund** was created to:
- **Eliminate high platform fees** – No intermediaries taking large cuts.
- **Enable global participation** – Anyone, anywhere, can create or support campaigns.
- **Ensure transparency** – All transactions are **on-chain**, preventing fraud or fund mismanagement.

---

## **Features**
**Decentralized & Transparent** – No centralized authority; everything is governed by smart contracts.  
**Ethereum-based Crowdfunding** – Fundraising without intermediaries or regional restrictions.  
**Metamask Wallet Integration** – Secure login and transactions using Web3 wallets.  
**Smart Contract Fund Escrow** – Funds are locked in the contract and only released to campaign creators after the campaign ends.  
**Donor & Campaign Owner Roles** – Users can create fundraising campaigns or donate to existing ones.  
**Low Transaction Costs** – Minimal gas fees compared to Web2 platforms' high commission rates.  

---

## **Tech Stack**
### **Blockchain & Smart Contracts**
- **Ethereum Sepolia Testnet**
- **Solidity** (Smart Contract Development)
- **Thirdweb SDK** (Contract Deployment & Interaction)
- **Ethers.js** (Blockchain Transactions)

### **Frontend**
- **React.js (Vite)** – Fast and optimized frontend framework.
- **Tailwind CSS** – Utility-first styling.
- **React Context API** – Manages global blockchain state.

### **Deployment & Hosting**
- **Vercel** (Frontend Deployment)
- **Thirdweb Upload** (Smart Contract Hosting)

---

## **How It Works**
### **1️⃣ Creating a Campaign**
- Users connect their **Ethereum wallet** via Metamask.
- They enter **title, description, funding goal, deadline, and image URL**.
- The smart contract **stores campaign details on-chain**.
- A unique campaign ID is assigned.

### **2️⃣ Donating to a Campaign**
- Users browse campaigns and choose one to support.
- Donations are sent in **ETH** directly to the smart contract.
- The donation details are **permanently stored** on the blockchain.
- The donor receives **proof of contribution**.

### **3️⃣ Withdrawing Funds**
- Once the campaign deadline passes, the **campaign creator can withdraw the funds**.
- The contract ensures that **only the campaign owner** can withdraw.
- If the goal is not met, a **refund system** can be implemented (future improvement).

---

## **Live Demo**
[Watch the Demo](https://drive.google.com/file/d/1hnEbDDTadi_4XFaRzuTsYeXGnT77JMCR/view?usp=sharing)

---

## **Setup & Deployment**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Vaishnavi024/BlockFund.git
cd BlockFund
``` 
### **2️⃣ Install Dependencies in the web3 Folder**
```bash
cd web3
npm install
```
### **3️⃣ Navigate to the Frontend Folder**
```bash
cd client
```
### **4️⃣ Install Dependencies**
```bash
npm install
```
### **5️⃣ Start the Development Server**
```bash
npm run dev
```



---

## **Future Improvements**
🔹 Implement **refunds for All-or-Nothing (AON) Campaigns **.    
🔹 Enable **NFT-based rewards for donors**.  

---


