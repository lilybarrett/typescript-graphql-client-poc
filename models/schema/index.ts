/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface ChannelDetailsQueryVariables {
  channelId: string,
};

export interface ChannelDetailsQuery {
  channel:  {
    __typename: "Channel",
    id: string,
    name: string | null,
    channelMessages:  Array< {
      __typename: "Message",
      id: string,
      text: string | null,
      messageUser: string | null,
    } | null > | null,
  } | null,
};
