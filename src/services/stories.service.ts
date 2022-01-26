import Axios from '../plugins/Axios.plugin';
import { AxiosResponse } from 'axios'
import { IStory } from '../models/Stories.models';

class StoryService {
  async getAllStories(): Promise<IStory[]> {
    return Axios.get<AxiosResponse, IStory[]>('/posts');
  }
  async getStoryDetails(id?: string): Promise<IStory> {
    return Axios.get<AxiosResponse, IStory>(`/posts/${id}`);
  }
}


export default new StoryService();
