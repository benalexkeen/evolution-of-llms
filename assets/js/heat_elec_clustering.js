var electricityValues = [15.7, 21.7, 38.9, 92.9, 42.8, 63.6, 39.1, 62.5, 87.9, 80.6, 15.3, 88.2, 49.0, 44.7, 91.3, 13.7, 17.8, 82.0, 44.6, 10.6, 31.4, 31.8, 58.6, 11.8, 60.2, 72.7, 16.6, 86.5, 0.8, 68.0, 59.7, 33.8, 1.0, 11.4, 92.2, 32.1, 14.5, 67.8, 70.6, 3.1, 39.4, 53.2, 26.6, 17.7, 16.4, 2.0, 91.6, 47.6, 29.6, 34.1, 11.5, 18.4, 26.2, 80.9, 37.6, 32.6, 33.9, 73.5, 52.3, 45.3, 89.0, 67.4, 69.7, 54.9, 0.3, 42.3, 76.1, 26.0, 54.5, 13.9, 1.6, 93.9, 58.2, 37.9, 23.0, 49.9, 58.3, 39.4, 27.8, 36.2, 66.3, 0.3, 90.2, 10.1, 54.0, 41.9, 37.0, 54.5, 92.3, 43.4, 57.3, 53.0, 43.8, 76.2, 39.3, 39.5, 74.3, 58.1, 0.6, 77.9, 47.0, 41.2, 76.3, 18.2, 48.6, 29.1, 54.5, 39.8, 68.5, 52.9, 63.7, 53.0, 36.0, 60.5, 74.4, 65.6, 44.4, 25.8, 71.6, 24.4, 30.6, 20.7, 57.9, 0.8, 58.4, 1.2, 20.6, 87.3, 40.7, 34.7, 0.1, 43.7, 58.7, 44.6, 14.7, 0.6, 78.8, 28.2, 77.9, 92.2, 33.6, 41.3, 25.3, 91.6, 46.2, 46.5, 33.9, 31.7, 47.9, 1.5, 1.4, 27.4, 0.2, 53.8, 1.8, 17.3, 39.6, 32.5, 59.9, 63.7, 15.3, 2.4, 41.8, 35.7, 30.6, 78.1, 16.9, 76.9, 0.4, 49.7, 37.7, 89.3, 0.0, 32.5, 15.2, 54.1, 65.0, 43.9, 2.8, 83.7, 23.9, 46.2, 53.4, 0.5, 26.8, 45.5, 83.3, 51.8, 0.7, 48.7, 81.6, 40.1, 54.1, 41.2, 26.8, 40.5, 0.1, 23.8, 35.2, 15.6, 36.9, 29.7, 33.1, 44.5, 31.2, 43.5, 9.4, 0.2, 74.7, 62.1, 32.0, 10.4, 22.5, 71.4, 39.3, 34.6, 44.1, 85.9, 25.7, 35.3, 41.0, 19.3, 8.5, 21.0, 48.4, 8.8, 0.7, 1.4, 41.5, 0.1, 89.7, 0.5, 0.7, 27.5, 32.1, 28.2, 96.2, 52.7, 1.3, 79.5, 39.0, 25.7, 8.2, 22.4, 64.3, 62.8, 36.5, 2.3, 96.6, 56.1, 51.5, 39.6, 58.3, 36.6, 45.4, 90.9, 37.4, 42.8, 64.7, 48.1, 44.6, 84.9, 1.3, 66.5, 60.6, 67.8, 46.4, 0.4, 62.0, 1.0, 1.6, 51.4, 25.7, 38.4, 56.3, 42.5, 36.4, 86.5, 35.3, 15.3, 42.3, 56.4, 64.1, 21.2, 93.3, 36.4, 58.6, 10.9, 87.5, 56.1, 28.0, 93.5, 28.4, 37.5, 42.1, 38.4, 26.9, 0.2, 92.1, 72.9, 20.4, 26.7, 88.8, 9.9, 72.9, 58.7, 33.4, 39.6, 71.6, 87.7, 21.4, 0.2, 38.0, 64.7, 59.0, 52.7, 31.1, 63.4, 43.6, 65.2, 66.2, 34.9, 0.2, 90.5, 55.2, 38.9, 73.6, 25.8, 58.5, 19.6, 40.8, 79.2, 37.4, 35.3, 64.6, 16.3, 26.7, 0.5, 15.7, 0.7, 31.3, 54.6, 34.8, 13.2, 27.3, 100.3, 53.1, 88.8, 35.3, 36.2, 44.6, 89.0, 22.3, 32.5, 72.3, 24.8, 90.0, 33.1, 32.6, 59.2, 45.2, 85.8, 63.6, 6.0, 40.3, 92.5, 15.3, 86.2, 90.5, 33.9, 27.3, 67.5, 91.3, 31.8, 67.9, 43.6, 87.5, 54.5, 41.7, 39.2, 13.6, 43.0, 87.9, 53.9, 33.3, 25.2, 42.6, 91.8, 42.3, 90.8, 0.7, 35.6, 36.7, 15.3, 1.6, 74.5, 34.3, 59.5, 47.7, 56.0, 55.3, 26.6, 59.5, 54.4, 49.7, 70.1, 66.4, 0.8, 0.6, 60.3, 34.3, 91.3, 19.2, 52.8, 80.8, 71.1, 21.3, 2.1, 16.3, 47.5, 34.8, 8.5, 0.7, 59.6, 39.9, 35.8, 27.9, 91.6, 43.2, 50.8, 44.4, 41.8, 0.1, 0.7, 94.0, 33.9, 44.9, 2.4, 41.6, 72.7, 0.8, 77.1, 35.4, 27.1, 31.9, 38.3, 1.0, 65.8, 64.3, 39.8, 85.0, 43.5, 14.1, 34.8, 34.3, 37.9, 35.5, 51.2, 53.6, 55.7, 26.8, 38.7, 24.4, 21.6, 32.0, 62.2, 65.1, 57.8, 9.7, 49.3, 61.2, 37.1, 51.3, 39.5, 39.9, 56.7, 66.2, 56.6, 36.8, 47.9, 93.6, 15.9, 29.5, 1.9, 39.1, 0.1, 87.9, 23.1, 2.0, 31.1, 14.7, 75.3, 56.9, 18.1, 58.2, 18.9, 59.7, 58.5, 70.8, 71.3, 76.1, 0.2, 29.5, 30.8, 33.8, 1.8, 41.7, 39.9, 89.9, 30.5, 17.4, 46.9, 30.1, 48.5, 17.8, 54.1, 9.8, 96.4, 15.0, 45.1, 55.1, 33.5, 0.4, 33.6, 51.8, 64.4, 0.3, 74.7, 32.5, 81.9, 70.3, 3.3, 62.3, 86.8, 1.4, 57.4, 94.3, 26.9, 0.3, 0.1, 65.9, 41.6, 72.1, 7.3, 36.2, 49.2, 73.3, 73.6, 37.6, 90.4, 10.2, 1.0, 35.9, 36.0, 51.9, 19.0, 17.9, 63.4, 41.1, 34.0, 66.2, 26.5, 56.6, 38.9, 90.1, 58.1, 1.2, 9.4, 42.5, 1.2, 43.0, 42.8, 34.0, 31.1, 19.4, 15.5, 91.5, 87.9, 15.6, 86.9, 40.1, 1.5, 67.7, 49.2, 48.2, 35.8, 10.5, 94.3, 52.7, 22.4, 34.5, 56.9, 89.7, 88.6, 37.5, 86.3, 0.9, 53.0, 1.4, 55.0, 36.7, 23.7, 39.2, 34.6, 36.5, 55.0, 34.2, 99.7, 75.2, 89.1, 78.6, 87.7, 22.2, 34.9, 37.5, 35.5, 31.8, 88.8, 38.4, 13.3, 67.7, 47.2, 25.8, 1.1, 61.3, 48.9, 43.0, 41.1, 0.9, 11.2, 62.1, 50.0, 0.0, 36.4, 93.2, 38.4, 87.0, 54.4, 76.0, 35.4, 1.7, 38.8, 22.9, 88.3, 98.0, 32.7, 49.5, 39.9, 18.7, 28.2, 0.3, 34.7, 1.1, 33.5, 61.9, 56.8, 28.6, 72.6, 1.2, 45.0, 52.1, 88.0, 27.6, 1.9, 41.8, 0.0, 2.6, 25.8, 94.6, 41.2, 95.7, 43.4, 0.8, 24.7, 15.1, 32.7, 31.9, 45.3, 32.2, 78.1, 60.2, 87.8, 51.5, 39.6, 22.2, 70.8, 0.4, 52.6, 1.3, 87.3, 35.7, 44.0, 62.6, 34.6, 15.8, 23.8, 32.5, 24.8, 61.1, 24.4, 8.3, 52.2, 35.6, 44.4, 11.3, 62.2, 26.3, 47.9, 57.9, 36.3, 1.9, 26.1, 1.9, 37.5, 39.0, 56.0, 38.6, 46.7, 58.7, 56.9, 41.7, 41.1, 29.3, 28.5, 50.8, 69.8, 88.2, 0.8, 43.7, 25.2, 37.5, 75.0, 31.1, 43.5, 48.1, 0.9, 29.9, 19.2, 65.8, 37.1, 92.0, 63.5, 48.0, 21.1, 55.3, 47.6, 26.0, 64.6, 12.6, 32.9, 45.4, 89.2, 23.1, 59.7, 41.0, 41.3, 64.2, 18.0, 90.5, 16.9, 12.9, 66.4, 29.6, 31.3, 39.3, 57.7, 42.6, 51.3, 26.5, 50.2, 55.1, 12.0, 66.1, 0.3, 86.8, 16.1, 0.1, 92.9, 14.2, 33.4, 40.0, 1.1, 83.4, 9.0, 41.7, 84.3, 64.0, 42.5, 0.1, 15.0, 73.1, 51.8, 30.9, 41.6, 51.0, 72.0, 35.5, 75.7, 16.5, 42.1, 84.0, 40.0, 27.5, 35.1, 75.1, 58.3, 52.0, 51.0, 27.0, 11.3, 13.5, 29.3, 39.2, 43.9, 63.3, 37.5, 91.3, 90.1, 0.0, 54.8, 39.7, 58.8, 62.0, 42.6, 18.5, 58.9, 33.9, 74.9, 60.3, 1.7, 15.7, 36.2, 73.7, 62.3, 92.8, 33.5, 43.7, 76.9, 19.0, 0.4, 13.7, 43.8, 0.5, 36.6, 57.2, 35.6, 52.8, 1.5, 86.5, 39.8, 35.4, 45.3, 91.5, 62.9, 84.2, 49.3, 66.4, 59.7, 22.5, 30.1, 0.2, 41.4, 28.5, 73.7, 15.3, 79.8, 69.8, 50.2, 2.0, 36.3, 0.2, 33.4, 60.5, 65.5, 0.8, 53.6, 30.7, 17.1, 52.6, 0.1, 40.6, 82.4, 43.7, 54.0, 36.7, 55.0, 95.1, 92.9, 55.0, 25.8, 20.4, 27.8, 20.9, 20.8, 74.5, 28.1, 52.7, 21.0, 86.9, 13.4, 46.3, 55.6, 28.7, 94.0, 40.4, 16.7, 34.4, 13.2, 55.8, 24.4, 96.8, 43.1, 30.8, 0.3, 45.3, 29.2, 44.9, 15.6, 54.9, 47.0]
var heatValues = [62.1, 20.8, 61.2, 108.2, 96.3, 7.5, 60.7, 89.5, 83.9, 69.3, 51.3, 103.4, 73.9, 112.8, 98.9, 69.2, 78.5, 89.7, 102.5, 53.2, 7.6, 11.5, 6.3, 50.3, 1.2, 50.2, 43.5, 101.3, 0.0, 11.2, 98.0, 86.4, 0.3, 63.6, 95.9, 8.7, 63.9, 0.9, 50.6, 0.8, 89.9, 5.6, 20.6, 55.3, 59.2, 1.6, 100.6, 65.5, 28.6, 10.7, 51.7, 48.6, 1.0, 67.0, 30.3, 9.0, 1.2, 56.0, 101.4, 62.1, 111.5, 12.7, 8.9, 3.5, 0.8, 101.9, 60.8, 5.3, 89.8, 57.4, 0.1, 105.4, 105.7, 71.9, 0.2, 5.6, 1.3, 81.8, 6.8, 78.1, 2.5, 0.7, 93.4, 85.1, 7.0, 46.6, 77.4, 1.3, 98.1, 101.2, 9.0, 58.3, 30.2, 67.0, 106.1, 24.0, 65.4, 2.6, 0.3, 57.6, 113.8, 76.3, 65.8, 54.9, 95.8, 23.7, 0.5, 1.7, 60.4, 0.0, 0.2, 3.1, 27.3, 1.5, 69.1, 4.3, 4.5, 9.8, 63.7, 94.4, 8.2, 2.1, 52.6, 0.8, 65.4, 0.2, 2.3, 92.9, 24.2, 23.4, 1.6, 31.2, 51.6, 57.5, 28.7, 0.9, 65.8, 22.2, 67.3, 104.4, 33.0, 51.0, 8.8, 118.2, 69.8, 90.3, 30.3, 12.4, 101.5, 1.5, 0.2, 91.8, 0.1, 4.4, 0.3, 43.1, 70.9, 68.9, 7.4, 90.2, 58.2, 0.4, 19.5, 29.2, 28.0, 64.4, 56.0, 63.0, 0.3, 109.1, 79.5, 100.5, 1.4, 24.2, 68.1, 7.4, 74.1, 81.4, 0.6, 60.8, 57.4, 46.4, 101.6, 0.7, 3.8, 101.8, 110.9, 5.7, 1.7, 100.1, 101.3, 69.9, 96.8, 21.4, 3.2, 78.5, 0.1, 3.4, 32.4, 61.7, 14.7, 78.4, 34.6, 61.5, 4.5, 4.9, 65.5, 0.5, 64.4, 2.5, 5.4, 68.3, 87.1, 56.8, 7.8, 76.9, 81.3, 89.3, 19.9, 62.4, 1.7, 41.9, 36.4, 5.9, 106.3, 63.1, 0.5, 0.1, 25.2, 1.4, 110.0, 0.4, 1.1, 0.5, 2.8, 5.4, 102.5, 2.1, 0.7, 106.9, 21.2, 3.0, 52.9, 74.2, 2.5, 64.3, 3.9, 1.1, 93.2, 2.7, 95.3, 93.0, 8.5, 55.6, 16.4, 106.7, 68.0, 28.4, 66.5, 88.9, 56.5, 83.1, 0.3, 55.4, 4.1, 6.5, 98.3, 0.9, 9.6, 0.9, 0.4, 0.4, 9.7, 20.0, 6.5, 27.6, 34.9, 109.5, 15.6, 54.7, 59.6, 1.5, 58.8, 5.4, 114.6, 78.5, 4.4, 42.8, 102.7, 91.5, 96.4, 110.0, 11.5, 101.5, 94.7, 32.2, 94.8, 1.8, 92.3, 56.3, 8.2, 4.3, 98.3, 61.3, 65.2, 64.7, 67.7, 22.6, 56.7, 83.4, 2.6, 0.4, 30.2, 3.2, 2.1, 89.9, 10.5, 4.0, 73.1, 2.0, 5.3, 20.3, 0.5, 106.0, 6.9, 14.7, 55.6, 87.6, 99.7, 61.6, 57.3, 57.1, 79.0, 22.0, 57.3, 29.3, 1.5, 0.5, 67.7, 0.5, 6.4, 6.7, 27.0, 48.1, 25.8, 101.9, 96.1, 112.5, 20.9, 106.8, 87.3, 86.2, 57.6, 24.8, 57.5, 23.4, 96.1, 2.3, 3.2, 106.6, 96.0, 112.2, 6.3, 56.7, 61.9, 99.5, 81.8, 102.6, 95.2, 0.2, 16.2, 61.3, 100.8, 5.7, 58.1, 63.3, 98.4, 92.4, 57.0, 71.6, 87.5, 74.4, 104.4, 27.8, 31.5, 21.3, 57.3, 85.9, 67.9, 95.7, 2.3, 92.6, 22.6, 76.9, 1.4, 51.6, 11.9, 61.4, 64.4, 7.7, 6.1, 3.2, 8.0, 67.8, 104.9, 75.3, 61.5, 0.4, 0.4, 74.3, 6.0, 114.1, 64.5, 105.9, 117.2, 70.9, 12.0, 2.2, 56.4, 102.6, 20.7, 65.3, 0.1, 4.9, 60.2, 22.7, 14.2, 79.6, 2.9, 2.2, 94.0, 67.9, 1.5, 0.7, 101.9, 37.8, 100.6, 0.8, 26.2, 41.5, 0.8, 6.8, 19.9, 5.3, 20.2, 72.6, 1.1, 4.1, 52.6, 33.1, 93.1, 72.0, 60.9, 21.2, 55.0, 30.0, 23.5, 98.3, 1.3, 98.1, 8.4, 84.7, 3.1, 68.2, 16.0, 3.4, 68.3, 0.9, 47.3, 6.7, 60.1, 58.5, 97.2, 68.1, 55.9, 2.0, 9.7, 98.9, 21.8, 105.3, 105.8, 65.2, 3.9, 1.4, 3.8, 0.8, 85.6, 86.2, 0.9, 3.0, 55.6, 69.6, 104.7, 51.9, 95.7, 9.0, 96.6, 65.2, 4.0, 58.8, 60.0, 0.6, 7.0, 64.1, 13.5, 1.3, 77.7, 25.1, 89.0, 28.8, 46.1, 0.4, 24.3, 105.0, 58.1, 92.8, 51.9, 114.9, 73.6, 103.0, 90.0, 84.8, 0.5, 1.5, 102.4, 4.9, 0.6, 58.6, 4.3, 95.1, 64.6, 0.5, 6.6, 105.1, 0.2, 6.0, 89.0, 106.7, 2.8, 0.7, 47.2, 47.7, 64.4, 61.5, 60.9, 102.5, 8.6, 67.3, 18.6, 106.2, 50.1, 0.0, 26.9, 78.1, 5.3, 39.9, 59.5, 66.8, 19.8, 0.7, 66.2, 0.7, 0.1, 2.0, 117.3, 2.5, 1.8, 26.8, 72.4, 1.6, 79.7, 100.8, 2.7, 2.9, 58.9, 96.7, 93.6, 101.1, 52.7, 99.6, 56.5, 0.5, 59.4, 14.0, 98.4, 8.0, 56.1, 113.7, 2.1, 15.2, 21.0, 6.4, 108.4, 92.2, 28.7, 92.6, 0.0, 88.5, 0.1, 84.7, 8.0, 3.1, 74.3, 24.8, 86.3, 61.2, 80.7, 103.0, 67.9, 95.3, 62.1, 94.5, 23.1, 84.9, 68.8, 17.4, 21.1, 73.4, 48.8, 60.8, 54.1, 99.1, 92.7, 0.6, 0.6, 100.8, 108.0, 15.9, 0.2, 90.3, 58.4, 106.1, 0.1, 67.5, 100.4, 74.5, 117.0, 104.1, 65.6, 64.4, 0.7, 27.9, 63.9, 97.6, 92.5, 0.3, 97.1, 15.5, 59.1, 6.5, 0.3, 8.7, 0.4, 23.4, 4.0, 1.0, 87.6, 65.1, 0.6, 24.7, 102.0, 88.5, 0.9, 0.2, 63.2, 0.1, 2.0, 88.0, 101.2, 100.9, 100.9, 63.1, 0.6, 4.0, 46.1, 76.2, 1.8, 98.6, 58.3, 81.7, 98.5, 100.7, 1.2, 65.2, 74.9, 3.8, 1.2, 3.9, 1.0, 101.8, 94.7, 96.6, 56.8, 25.3, 54.2, 0.7, 6.3, 83.5, 11.3, 5.2, 43.6, 106.5, 0.5, 97.7, 77.6, 90.1, 24.6, 105.2, 7.1, 9.7, 0.6, 5.4, 0.4, 101.5, 19.6, 58.7, 22.5, 99.1, 1.8, 12.2, 53.7, 86.1, 2.1, 87.6, 95.4, 59.6, 59.8, 0.8, 72.7, 103.9, 69.7, 56.7, 92.3, 85.5, 112.6, 0.6, 23.8, 72.4, 53.4, 69.3, 96.3, 60.5, 31.8, 76.4, 99.4, 106.6, 5.3, 69.1, 50.1, 1.4, 92.7, 114.2, 76.1, 49.7, 46.0, 96.5, 59.3, 77.5, 106.8, 59.6, 67.8, 59.8, 6.2, 5.2, 10.1, 96.9, 70.0, 100.6, 79.9, 78.2, 2.6, 49.1, 6.8, 1.7, 104.1, 78.6, 0.4, 98.4, 79.0, 22.9, 71.7, 1.6, 88.4, 42.5, 97.7, 78.2, 4.3, 66.8, 0.3, 66.4, 66.9, 98.6, 0.5, 24.6, 92.2, 53.8, 2.4, 52.5, 84.8, 94.5, 109.4, 4.3, 17.7, 18.7, 57.7, 57.5, 2.9, 98.9, 82.7, 54.2, 62.1, 33.9, 68.5, 82.3, 5.7, 96.5, 83.3, 99.0, 0.6, 100.2, 19.9, 62.5, 63.0, 63.2, 74.3, 7.5, 23.2, 55.7, 56.9, 0.2, 43.9, 29.7, 64.9, 2.1, 119.7, 3.3, 26.0, 68.0, 65.0, 0.2, 44.1, 102.9, 0.1, 22.2, 9.6, 5.3, 6.5, 1.1, 98.5, 11.3, 2.5, 68.7, 113.7, 56.8, 88.1, 110.7, 64.0, 6.3, 0.3, 3.1, 1.0, 75.9, 3.9, 65.6, 64.8, 58.4, 66.5, 94.8, 0.7, 11.0, 0.1, 0.4, 63.5, 14.3, 0.2, 97.7, 8.6, 38.3, 5.3, 0.3, 59.1, 67.9, 67.4, 2.6, 75.1, 92.8, 102.0, 104.6, 0.6, 88.3, 3.2, 27.0, 39.6, 0.4, 63.5, 0.2, 108.8, 5.8, 119.4, 52.0, 100.4, 8.5, 92.1, 88.2, 97.7, 70.9, 33.5, 68.4, 3.0, 48.0, 114.7, 65.1, 4.2, 1.0, 108.2, 18.6, 94.4, 69.7, 51.9, 4.4]

var allData = [[15.7, 62.1], [21.7, 20.8], [38.9, 61.2], [92.9, 108.2], [42.8, 96.3], [63.6, 7.5], [39.1, 60.7], [62.5, 89.5], [87.9, 83.9], [80.6, 69.3], [15.3, 51.3], [88.2, 103.4], [49.0, 73.9], [44.7, 112.8], [91.3, 98.9], [13.7, 69.2], [17.8, 78.5], [82.0, 89.7], [44.6, 102.5], [10.6, 53.2], [31.4, 7.6], [31.8, 11.5], [58.6, 6.3], [11.8, 50.3], [60.2, 1.2], [72.7, 50.2], [16.6, 43.5], [86.5, 101.3], [0.8, 0.0], [68.0, 11.2], [59.7, 98.0], [33.8, 86.4], [1.0, 0.3], [11.4, 63.6], [92.2, 95.9], [32.1, 8.7], [14.5, 63.9], [67.8, 0.9], [70.6, 50.6], [3.1, 0.8], [39.4, 89.9], [53.2, 5.6], [26.6, 20.6], [17.7, 55.3], [16.4, 59.2], [2.0, 1.6], [91.6, 100.6], [47.6, 65.5], [29.6, 28.6], [34.1, 10.7], [11.5, 51.7], [18.4, 48.6], [26.2, 1.0], [80.9, 67.0], [37.6, 30.3], [32.6, 9.0], [33.9, 1.2], [73.5, 56.0], [52.3, 101.4], [45.3, 62.1], [89.0, 111.5], [67.4, 12.7], [69.7, 8.9], [54.9, 3.5], [0.3, 0.8], [42.3, 101.9], [76.1, 60.8], [26.0, 5.3], [54.5, 89.8], [13.9, 57.4], [1.6, 0.1], [93.9, 105.4], [58.2, 105.7], [37.9, 71.9], [23.0, 0.2], [49.9, 5.6], [58.3, 1.3], [39.4, 81.8], [27.8, 6.8], [36.2, 78.1], [66.3, 2.5], [0.3, 0.7], [90.2, 93.4], [10.1, 85.1], [54.0, 7.0], [41.9, 46.6], [37.0, 77.4], [54.5, 1.3], [92.3, 98.1], [43.4, 101.2], [57.3, 9.0], [53.0, 58.3], [43.8, 30.2], [76.2, 67.0], [39.3, 106.1], [39.5, 24.0], [74.3, 65.4], [58.1, 2.6], [0.6, 0.3], [77.9, 57.6], [47.0, 113.8], [41.2, 76.3], [76.3, 65.8], [18.2, 54.9], [48.6, 95.8], [29.1, 23.7], [54.5, 0.5], [39.8, 1.7], [68.5, 60.4], [52.9, 0.0], [63.7, 0.2], [53.0, 3.1], [36.0, 27.3], [60.5, 1.5], [74.4, 69.1], [65.6, 4.3], [44.4, 4.5], [25.8, 9.8], [71.6, 63.7], [24.4, 94.4], [30.6, 8.2], [20.7, 2.1], [57.9, 52.6], [0.8, 0.8], [58.4, 65.4], [1.2, 0.2], [20.6, 2.3], [87.3, 92.9], [40.7, 24.2], [34.7, 23.4], [0.1, 1.6], [43.7, 31.2], [58.7, 51.6], [44.6, 57.5], [14.7, 28.7], [0.6, 0.9], [78.8, 65.8], [28.2, 22.2], [77.9, 67.3], [92.2, 104.4], [33.6, 33.0], [41.3, 51.0], [25.3, 8.8], [91.6, 118.2], [46.2, 69.8], [46.5, 90.3], [33.9, 30.3], [31.7, 12.4], [47.9, 101.5], [1.5, 1.5], [1.4, 0.2], [27.4, 91.8], [0.2, 0.1], [53.8, 4.4], [1.8, 0.3], [17.3, 43.1], [39.6, 70.9], [32.5, 68.9], [59.9, 7.4], [63.7, 90.2], [15.3, 58.2], [2.4, 0.4], [41.8, 19.5], [35.7, 29.2], [30.6, 28.0], [78.1, 64.4], [16.9, 56.0], [76.9, 63.0], [0.4, 0.3], [49.7, 109.1], [37.7, 79.5], [89.3, 100.5], [0.0, 1.4], [32.5, 24.2], [15.2, 68.1], [54.1, 7.4], [65.0, 74.1], [43.9, 81.4], [2.8, 0.6], [83.7, 60.8], [23.9, 57.4], [46.2, 46.4], [53.4, 101.6], [0.5, 0.7], [26.8, 3.8], [45.5, 101.8], [83.3, 110.9], [51.8, 5.7], [0.7, 1.7], [48.7, 100.1], [81.6, 101.3], [40.1, 69.9], [54.1, 96.8], [41.2, 21.4], [26.8, 3.2], [40.5, 78.5], [0.1, 0.1], [23.8, 3.4], [35.2, 32.4], [15.6, 61.7], [36.9, 14.7], [29.7, 78.4], [33.1, 34.6], [44.5, 61.5], [31.2, 4.5], [43.5, 4.9], [9.4, 65.5], [0.2, 0.5], [74.7, 64.4], [62.1, 2.5], [32.0, 5.4], [10.4, 68.3], [22.5, 87.1], [71.4, 56.8], [39.3, 7.8], [34.6, 76.9], [44.1, 81.3], [85.9, 89.3], [25.7, 19.9], [35.3, 62.4], [41.0, 1.7], [19.3, 41.9], [8.5, 36.4], [21.0, 5.9], [48.4, 106.3], [8.8, 63.1], [0.7, 0.5], [1.4, 0.1], [41.5, 25.2], [0.1, 1.4], [89.7, 110.0], [0.5, 0.4], [0.7, 1.1], [27.5, 0.5], [32.1, 2.8], [28.2, 5.4], [96.2, 102.5], [52.7, 2.1], [1.3, 0.7], [79.5, 106.9], [39.0, 21.2], [25.7, 3.0], [8.2, 52.9], [22.4, 74.2], [64.3, 2.5], [62.8, 64.3], [36.5, 3.9], [2.3, 1.1], [96.6, 93.2], [56.1, 2.7], [51.5, 95.3], [39.6, 93.0], [58.3, 8.5], [36.6, 55.6], [45.4, 16.4], [90.9, 106.7], [37.4, 68.0], [42.8, 28.4], [64.7, 66.5], [48.1, 88.9], [44.6, 56.5], [84.9, 83.1], [1.3, 0.3], [66.5, 55.4], [60.6, 4.1], [67.8, 6.5], [46.4, 98.3], [0.4, 0.9], [62.0, 9.6], [1.0, 0.9], [1.6, 0.4], [51.4, 0.4], [25.7, 9.7], [38.4, 20.0], [56.3, 6.5], [42.5, 27.6], [36.4, 34.9], [86.5, 109.5], [35.3, 15.6], [15.3, 54.7], [42.3, 59.6], [56.4, 1.5], [64.1, 58.8], [21.2, 5.4], [93.3, 114.6], [36.4, 78.5], [58.6, 4.4], [10.9, 42.8], [87.5, 102.7], [56.1, 91.5], [28.0, 96.4], [93.5, 110.0], [28.4, 11.5], [37.5, 101.5], [42.1, 94.7], [38.4, 32.2], [26.9, 94.8], [0.2, 1.8], [92.1, 92.3], [72.9, 56.3], [20.4, 8.2], [26.7, 4.3], [88.8, 98.3], [9.9, 61.3], [72.9, 65.2], [58.7, 64.7], [33.4, 67.7], [39.6, 22.6], [71.6, 56.7], [87.7, 83.4], [21.4, 2.6], [0.2, 0.4], [38.0, 30.2], [64.7, 3.2], [59.0, 2.1], [52.7, 89.9], [31.1, 10.5], [63.4, 4.0], [43.6, 73.1], [65.2, 2.0], [66.2, 5.3], [34.9, 20.3], [0.2, 0.5], [90.5, 106.0], [55.2, 6.9], [38.9, 14.7], [73.6, 55.6], [25.8, 87.6], [58.5, 99.7], [19.6, 61.6], [40.8, 57.3], [79.2, 57.1], [37.4, 79.0], [35.3, 22.0], [64.6, 57.3], [16.3, 29.3], [26.7, 1.5], [0.5, 0.5], [15.7, 67.7], [0.7, 0.5], [31.3, 6.4], [54.6, 6.7], [34.8, 27.0], [13.2, 48.1], [27.3, 25.8], [100.3, 101.9], [53.1, 96.1], [88.8, 112.5], [35.3, 20.9], [36.2, 106.8], [44.6, 87.3], [89.0, 86.2], [22.3, 57.6], [32.5, 24.8], [72.3, 57.5], [24.8, 23.4], [90.0, 96.1], [33.1, 2.3], [32.6, 3.2], [59.2, 106.6], [45.2, 96.0], [85.8, 112.2], [63.6, 6.3], [6.0, 56.7], [40.3, 61.9], [92.5, 99.5], [15.3, 81.8], [86.2, 102.6], [90.5, 95.2], [33.9, 0.2], [27.3, 16.2], [67.5, 61.3], [91.3, 100.8], [31.8, 5.7], [67.9, 58.1], [43.6, 63.3], [87.5, 98.4], [54.5, 92.4], [41.7, 57.0], [39.2, 71.6], [13.6, 87.5], [43.0, 74.4], [87.9, 104.4], [53.9, 27.8], [33.3, 31.5], [25.2, 21.3], [42.6, 57.3], [91.8, 85.9], [42.3, 67.9], [90.8, 95.7], [0.7, 2.3], [35.6, 92.6], [36.7, 22.6], [15.3, 76.9], [1.6, 1.4], [74.5, 51.6], [34.3, 11.9], [59.5, 61.4], [47.7, 64.4], [56.0, 7.7], [55.3, 6.1], [26.6, 3.2], [59.5, 8.0], [54.4, 67.8], [49.7, 104.9], [70.1, 75.3], [66.4, 61.5], [0.8, 0.4], [0.6, 0.4], [60.3, 74.3], [34.3, 6.0], [91.3, 114.1], [19.2, 64.5], [52.8, 105.9], [80.8, 117.2], [71.1, 70.9], [21.3, 12.0], [2.1, 2.2], [16.3, 56.4], [47.5, 102.6], [34.8, 20.7], [8.5, 65.3], [0.7, 0.1], [59.6, 4.9], [39.9, 60.2], [35.8, 22.7], [27.9, 14.2], [91.6, 79.6], [43.2, 2.9], [50.8, 2.2], [44.4, 94.0], [41.8, 67.9], [0.1, 1.5], [0.7, 0.7], [94.0, 101.9], [33.9, 37.8], [44.9, 100.6], [2.4, 0.8], [41.6, 26.2], [72.7, 41.5], [0.8, 0.8], [77.1, 6.8], [35.4, 19.9], [27.1, 5.3], [31.9, 20.2], [38.3, 72.6], [1.0, 1.1], [65.8, 4.1], [64.3, 52.6], [39.8, 33.1], [85.0, 93.1], [43.5, 72.0], [14.1, 60.9], [34.8, 21.2], [34.3, 55.0], [37.9, 30.0], [35.5, 23.5], [51.2, 98.3], [53.6, 1.3], [55.7, 98.1], [26.8, 8.4], [38.7, 84.7], [24.4, 3.1], [21.6, 68.2], [32.0, 16.0], [62.2, 3.4], [65.1, 68.3], [57.8, 0.9], [9.7, 47.3], [49.3, 6.7], [61.2, 60.1], [37.1, 58.5], [51.3, 97.2], [39.5, 68.1], [39.9, 55.9], [56.7, 2.0], [66.2, 9.7], [56.6, 98.9], [36.8, 21.8], [47.9, 105.3], [93.6, 105.8], [15.9, 65.2], [29.5, 3.9], [1.9, 1.4], [39.1, 3.8], [0.1, 0.8], [87.9, 85.6], [23.1, 86.2], [2.0, 0.9], [31.1, 3.0], [14.7, 55.6], [75.3, 69.6], [56.9, 104.7], [18.1, 51.9], [58.2, 95.7], [18.9, 9.0], [59.7, 96.6], [58.5, 65.2], [70.8, 4.0], [71.3, 58.8], [76.1, 60.0], [0.2, 0.6], [29.5, 7.0], [30.8, 64.1], [33.8, 13.5], [1.8, 1.3], [41.7, 77.7], [39.9, 25.1], [89.9, 89.0], [30.5, 28.8], [17.4, 46.1], [46.9, 0.4], [30.1, 24.3], [48.5, 105.0], [17.8, 58.1], [54.1, 92.8], [9.8, 51.9], [96.4, 114.9], [15.0, 73.6], [45.1, 103.0], [55.1, 90.0], [33.5, 84.8], [0.4, 0.5], [33.6, 1.5], [51.8, 102.4], [64.4, 4.9], [0.3, 0.6], [74.7, 58.6], [32.5, 4.3], [81.9, 95.1], [70.3, 64.6], [3.3, 0.5], [62.3, 6.6], [86.8, 105.1], [1.4, 0.2], [57.4, 6.0], [94.3, 89.0], [26.9, 106.7], [0.3, 2.8], [0.1, 0.7], [65.9, 47.2], [41.6, 47.7], [72.1, 64.4], [7.3, 61.5], [36.2, 60.9], [49.2, 102.5], [73.3, 8.6], [73.6, 67.3], [37.6, 18.6], [90.4, 106.2], [10.2, 50.1], [1.0, 0.0], [35.9, 26.9], [36.0, 78.1], [51.9, 5.3], [19.0, 39.9], [17.9, 59.5], [63.4, 66.8], [41.1, 19.8], [34.0, 0.7], [66.2, 66.2], [26.5, 0.7], [56.6, 0.1], [38.9, 2.0], [90.1, 117.3], [58.1, 2.5], [1.2, 1.8], [9.4, 26.8], [42.5, 72.4], [1.2, 1.6], [43.0, 79.7], [42.8, 100.8], [34.0, 2.7], [31.1, 2.9], [19.4, 58.9], [15.5, 96.7], [91.5, 93.6], [87.9, 101.1], [15.6, 52.7], [86.9, 99.6], [40.1, 56.5], [1.5, 0.5], [67.7, 59.4], [49.2, 14.0], [48.2, 98.4], [35.8, 8.0], [10.5, 56.1], [94.3, 113.7], [52.7, 2.1], [22.4, 15.2], [34.5, 21.0], [56.9, 6.4], [89.7, 108.4], [88.6, 92.2], [37.5, 28.7], [86.3, 92.6], [0.9, 0.0], [53.0, 88.5], [1.4, 0.1], [55.0, 84.7], [36.7, 8.0], [23.7, 3.1], [39.2, 74.3], [34.6, 24.8], [36.5, 86.3], [55.0, 61.2], [34.2, 80.7], [99.7, 103.0], [75.2, 67.9], [89.1, 95.3], [78.6, 62.1], [87.7, 94.5], [22.2, 23.1], [34.9, 84.9], [37.5, 68.8], [35.5, 17.4], [31.8, 21.1], [88.8, 73.4], [38.4, 48.8], [13.3, 60.8], [67.7, 54.1], [47.2, 99.1], [25.8, 92.7], [1.1, 0.6], [61.3, 0.6], [48.9, 100.8], [43.0, 108.0], [41.1, 15.9], [0.9, 0.2], [11.2, 90.3], [62.1, 58.4], [50.0, 106.1], [0.0, 0.1], [36.4, 67.5], [93.2, 100.4], [38.4, 74.5], [87.0, 117.0], [54.4, 104.1], [76.0, 65.6], [35.4, 64.4], [1.7, 0.7], [38.8, 27.9], [22.9, 63.9], [88.3, 97.6], [98.0, 92.5], [32.7, 0.3], [49.5, 97.1], [39.9, 15.5], [18.7, 59.1], [28.2, 6.5], [0.3, 0.3], [34.7, 8.7], [1.1, 0.4], [33.5, 23.4], [61.9, 4.0], [56.8, 1.0], [28.6, 87.6], [72.6, 65.1], [1.2, 0.6], [45.0, 24.7], [52.1, 102.0], [88.0, 88.5], [27.6, 0.9], [1.9, 0.2], [41.8, 63.2], [0.0, 0.1], [2.6, 2.0], [25.8, 88.0], [94.6, 101.2], [41.2, 100.9], [95.7, 100.9], [43.4, 63.1], [0.8, 0.6], [24.7, 4.0], [15.1, 46.1], [32.7, 76.2], [31.9, 1.8], [45.3, 98.6], [32.2, 58.3], [78.1, 81.7], [60.2, 98.5], [87.8, 100.7], [51.5, 1.2], [39.6, 65.2], [22.2, 74.9], [70.8, 3.8], [0.4, 1.2], [52.6, 3.9], [1.3, 1.0], [87.3, 101.8], [35.7, 94.7], [44.0, 96.6], [62.6, 56.8], [34.6, 25.3], [15.8, 54.2], [23.8, 0.7], [32.5, 6.3], [24.8, 83.5], [61.1, 11.3], [24.4, 5.2], [8.3, 43.6], [52.2, 106.5], [35.6, 0.5], [44.4, 97.7], [11.3, 77.6], [62.2, 90.1], [26.3, 24.6], [47.9, 105.2], [57.9, 7.1], [36.3, 9.7], [1.9, 0.6], [26.1, 5.4], [1.9, 0.4], [37.5, 101.5], [39.0, 19.6], [56.0, 58.7], [38.6, 22.5], [46.7, 99.1], [58.7, 1.8], [56.9, 12.2], [41.7, 53.7], [41.1, 86.1], [29.3, 2.1], [28.5, 87.6], [50.8, 95.4], [69.8, 59.6], [88.2, 59.8], [0.8, 0.8], [43.7, 72.7], [25.2, 103.9], [37.5, 69.7], [75.0, 56.7], [31.1, 92.3], [43.5, 85.5], [48.1, 112.6], [0.9, 0.6], [29.9, 23.8], [19.2, 72.4], [65.8, 53.4], [37.1, 69.3], [92.0, 96.3], [63.5, 60.5], [48.0, 31.8], [21.1, 76.4], [55.3, 99.4], [47.6, 106.6], [26.0, 5.3], [64.6, 69.1], [12.6, 50.1], [32.9, 1.4], [45.4, 92.7], [89.2, 114.2], [23.1, 76.1], [59.7, 49.7], [41.0, 46.0], [41.3, 96.5], [64.2, 59.3], [18.0, 77.5], [90.5, 106.8], [16.9, 59.6], [12.9, 67.8], [66.4, 59.8], [29.6, 6.2], [31.3, 5.2], [39.3, 10.1], [57.7, 96.9], [42.6, 70.0], [51.3, 100.6], [26.5, 79.9], [50.2, 78.2], [55.1, 2.6], [12.0, 49.1], [66.1, 6.8], [0.3, 1.7], [86.8, 104.1], [16.1, 78.6], [0.1, 0.4], [92.9, 98.4], [14.2, 79.0], [33.4, 22.9], [40.0, 71.7], [1.1, 1.6], [83.4, 88.4], [9.0, 42.5], [41.7, 97.7], [84.3, 78.2], [64.0, 4.3], [42.5, 66.8], [0.1, 0.3], [15.0, 66.4], [73.1, 66.9], [51.8, 98.6], [30.9, 0.5], [41.6, 24.6], [51.0, 92.2], [72.0, 53.8], [35.5, 2.4], [75.7, 52.5], [16.5, 84.8], [42.1, 94.5], [84.0, 109.4], [40.0, 4.3], [27.5, 17.7], [35.1, 18.7], [75.1, 57.7], [58.3, 57.5], [52.0, 2.9], [51.0, 98.9], [27.0, 82.7], [11.3, 54.2], [13.5, 62.1], [29.3, 33.9], [39.2, 68.5], [43.9, 82.3], [63.3, 5.7], [37.5, 96.5], [91.3, 83.3], [90.1, 99.0], [0.0, 0.6], [54.8, 100.2], [39.7, 19.9], [58.8, 62.5], [62.0, 63.0], [42.6, 63.2], [18.5, 74.3], [58.9, 7.5], [33.9, 23.2], [74.9, 55.7], [60.3, 56.9], [1.7, 0.2], [15.7, 43.9], [36.2, 29.7], [73.7, 64.9], [62.3, 2.1], [92.8, 119.7], [33.5, 3.3], [43.7, 26.0], [76.9, 68.0], [19.0, 65.0], [0.4, 0.2], [13.7, 44.1], [43.8, 102.9], [0.5, 0.1], [36.6, 22.2], [57.2, 9.6], [35.6, 5.3], [52.8, 6.5], [1.5, 1.1], [86.5, 98.5], [39.8, 11.3], [35.4, 2.5], [45.3, 68.7], [91.5, 113.7], [62.9, 56.8], [84.2, 88.1], [49.3, 110.7], [66.4, 64.0], [59.7, 6.3], [22.5, 0.3], [30.1, 3.1], [0.2, 1.0], [41.4, 75.9], [28.5, 3.9], [73.7, 65.6], [15.3, 64.8], [79.8, 58.4], [69.8, 66.5], [50.2, 94.8], [2.0, 0.7], [36.3, 11.0], [0.2, 0.1], [33.4, 0.4], [60.5, 63.5], [65.5, 14.3], [0.8, 0.2], [53.6, 97.7], [30.7, 8.6], [17.1, 38.3], [52.6, 5.3], [0.1, 0.3], [40.6, 59.1], [82.4, 67.9], [43.7, 67.4], [54.0, 2.6], [36.7, 75.1], [55.0, 92.8], [95.1, 102.0], [92.9, 104.6], [55.0, 0.6], [25.8, 88.3], [20.4, 3.2], [27.8, 27.0], [20.9, 39.6], [20.8, 0.4], [74.5, 63.5], [28.1, 0.2], [52.7, 108.8], [21.0, 5.8], [86.9, 119.4], [13.4, 52.0], [46.3, 100.4], [55.6, 8.5], [28.7, 92.1], [94.0, 88.2], [40.4, 97.7], [16.7, 70.9], [34.4, 33.5], [13.2, 68.4], [55.8, 3.0], [24.4, 48.0], [96.8, 114.7], [43.1, 65.1], [30.8, 4.2], [0.3, 1.0], [45.3, 108.2], [29.2, 18.6], [44.9, 94.4], [15.6, 69.7], [54.9, 51.9], [47.0, 4.4]]

"use strict";
/* global $ */
/**
 * Created by Ben on 01/03/18.
 */

$('#cluster-chart').highcharts({
    chart: {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        height: 500
    },
    credits: {
      enabled: false
    },
    title: {
        text: ''
    },
    series: [{
    	name: '',
    	type: 'scatter',
    	data: [],
    	color: 'rgba(204, 0, 0, 0.5)',
    	enableMouseTracking: true
    }],
    legend: {
    	enabled: false
    },
    plotOptions: {
    	series: {
            animation: false
        }
    },
    xAxis: {
    	title: {
    		text: 'Electricity output (MW)'
    	},
    	max: 105,
	    min: 0
    },
    yAxis: {
    	title: {
    		text: 'Heat output (MWth)'
    	},
    	max: 130,
	    min: 0
    },
});

function updateClusterChart(animationFrame, clusterFrame) {
	var scatterData = allData.slice(0, 10 * animationFrame);
	var chartSeries = [
		{
	    	type: 'scatter',
	    	data: scatterData,
	    	color: 'rgba(204, 0, 0, 0.5)',
	    	enableMouseTracking: true
	    },
	    {
	        type: 'polygon',
	        data: [[3, 0], [4, 1], [3, 3.5], [-1, 4], [-1, -1], [4, 0]],
	        color: 'rgba(0, 200, 220, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[9, 26], [15, 29], [25, 48], [24, 76], [17, 95], [9, 85], [5, 55], [9, 26]],
	        color: 'rgba(247, 142, 30, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[30, 75], [32, 92], [27, 109], [25, 105], [22, 87], [26, 77], [30, 75]],
	        color: 'rgba(214, 214, 214, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[40, 45], [47, 45], [51, 78], [44, 89], [37, 97], [35, 96], [32, 85], [30, 64], [34, 54], [40, 45]],
	        color: 'rgba(0, 142, 170, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[50, 13], [49, 33], [34, 38], [29, 34], [24, 23], [25, 17], [32, 20], [37, 15], [45, 16], [50, 13]],
	        color: 'rgba(85, 149, 27, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[20, 0], [47.5, 0], [47.5, 5], [40, 12], [32, 13], [20, 9], [20, 0]],
	        color: 'rgba(65, 65, 65, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[51, 0], [49, 7], [57, 13], [67, 13], [74, 9], [70, 0], [51, 0]],
	        color: 'rgba(0, 62, 130, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[55, 51], [66, 47], [73, 49], [84, 61], [83, 69], [78, 75], [70, 76], [60, 76], [54, 68], [52, 58], [55, 51]],
	        color: 'rgba(172, 31, 37, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[37, 97], [48, 88], [55, 84], [64, 90], [59, 108], [47, 114], [36, 107], [37, 97]],
	        color: 'rgba(255, 198, 0, 0.5)',
	        enableMouseTracking: false
	    },
	    {
	        type: 'polygon',
	        data: [[77, 81], [89, 73], [100, 93], [101, 102], [97, 115], [93, 121], [80, 118], [79, 107], [77, 81]],
	        color: 'rgba(148, 0, 211, 0.5)',
	        enableMouseTracking: false
	    },   
    ].slice(0, clusterFrame+1);
	var chart = $('#cluster-chart').highcharts({
	    chart: {
	        backgroundColor: 'rgba(255, 255, 255, 0.0)',
	        height: 500
	    },
	    credits: {
	      enabled: false
	    },
	    title: {
	        text: ''
	    },
	    series: chartSeries,
	    legend: {
	    	enabled: false
	    },
	    plotOptions: {
	    	series: {
	            animation: false
	        }
	    },
	    xAxis: {
	    	title: {
	    		text: 'Electricity output (MW)'
	    	},
	    	max: 105,
	    	min: 0

	    },
	    yAxis: {
	    	title: {
	    		text: 'Heat output (MWth)'
	    	},
	    	max: 130,
	    	min: 0
	    },
	});
	return false;
}

var animationFrame = 0;
var clusterFrame = 0;
var timing = 50;
var timingTwo = 500;

$('#start').on('click', function() {
 	function loop() {
  		if (animationFrame < 93) {
  			animationFrame++;
  			updateClusterChart(animationFrame, clusterFrame);
  			window.setTimeout(loop, timing);
  			return false;
  		} else if (clusterFrame < 11) {
  			clusterFrame++;
  			updateClusterChart(animationFrame, clusterFrame);
  			window.setTimeout(loop, timingTwo);
  			return false;
  		}
  		console.log("Animation Frame: " + animationFrame + ", Cluster Frame: " + clusterFrame)
	}

	loop();
	return false;

});