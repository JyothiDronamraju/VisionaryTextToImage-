from flask import Flask, request, jsonify
from diffusers import StableDiffusionPipeline
import torch

app = Flask(__name__)

# Load the stable diffusion model
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id)
pipe = pipe.to("cuda")

@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.get_json()
    text = data['text']
    image = pipe(text)["sample"][0]
    image_path = "generated_image.png"
    image.save(image_path)
    return jsonify({"image_path": image_path})

if __name__ == '__main__':
    app.run(debug=True)
