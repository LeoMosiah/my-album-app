import axios, { AxiosResponse } from 'axios';
import { Photo } from '../../domain/entities/photo';

export async function getPhotos(): Promise<AxiosResponse<Photo[]>> {
  return axios.get('photos').then(res => res.data);
}
