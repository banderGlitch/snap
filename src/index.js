import { Box, Heading, Text } from "@metamask/snaps-sdk/jsx";

export const onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'getWalletAddress':
      // Get the current wallet address from MetaMask
      const entropy = await snap.request({
        method: 'snap_getEntropy',
        params: {
          version: 1
        }
      });

      // Use the entropy to derive an address (this is a simplified example)
      const walletAddress = `0x${entropy.slice(2, 42)}`;
      return snap.request({
        method: "snap_dialog",
        params: {
          type: "alert",
          content: (
            <Box>
              <Heading>Current wallet address</Heading>
              <Text>{walletAddress}</Text>
            </Box>
          ),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};

// import { Box, Heading, Text } from "@metamask/snaps-sdk/jsx";

// export const walletAddress = await snap.request({
//   method: "snap_dialog",
//   params: {
//     type: "prompt",
//     content: (
//       <Box>
//         <Heading>What is the wallet address?</Heading>
//         <Text>Please enter the wallet address to be monitored</Text>
//       </Box>
//     ),
//     placeholder: "0x123...",
//   },
// });

// walletAddress will be a string containing the address entered by the user.
// import { OnRpcRequestHandler } from '@metamask/snaps-types';
// import { panel, text, divider, heading } from '@metamask/snaps-ui';

// export const onRpcRequest: OnRpcRequestHandler = async ({ origin, request }) => {
//   switch (request.method) {
//     case 'hello':
//       return snap.request({
//         method: 'snap_dialog',
//         params: {
//           type: 'confirmation',
//           content: panel([
//             heading('Hello!'),
//             text(`Origin: ${origin}`),
//             divider(),
//             text('This custom confirmation is just for display purposes.'),
//             text('But you can add some text here, if you want to!'),
//           ]),
//         },
//       });
//     default:
//       throw new Error('Method not found.');
//   }
// };