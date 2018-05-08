/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CreateMessageMutationVariables {
  text?: string | null,
  messageUser?: string | null,
  messageChannelId?: number | null,
};

export interface CreateMessageMutation {
  createChannelMessage:  {
    __typename: "Message",
    messageChannelId: number | null,
    text: string | null,
    messageUser: string | null,
  } | null,
};

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

export interface CreateChannelMutationVariables {
  name: string,
};

export interface CreateChannelMutation {
  createChannel:  {
    __typename: "Channel",
    id: string,
    name: string | null,
  } | null,
};

export interface ChannelsListQuery {
  channels:  Array< {
    __typename: "Channel",
    id: string,
    name: string | null,
  } | null > | null,
};
