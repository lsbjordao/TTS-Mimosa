// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa orthocarpa
const Mimosa_orthocarpa = new Mimosa()
Mimosa_orthocarpa.specificEpithet = 'orthocarpa'

Mimosa_orthocarpa.stems = new Stems()

Mimosa_orthocarpa.stipule = new Stipule()
Mimosa_orthocarpa.stipule.margin = new MarginStipule()
Mimosa_orthocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_orthocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_orthocarpa.leaf = new Leaf()
Mimosa_orthocarpa.leaf.petiole = new Petiole()
Mimosa_orthocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_orthocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_orthocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_orthocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 27)
Mimosa_orthocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_orthocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_orthocarpa.inflorescence = new Inflorescence()
Mimosa_orthocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_orthocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_orthocarpa.flower = new Flower()
Mimosa_orthocarpa.flower.bracteole = new Bracteole()
Mimosa_orthocarpa.flower.calyx = new Calyx()
Mimosa_orthocarpa.flower.corolla = new Corolla()

Mimosa_orthocarpa.androecium = new Androecium()
Mimosa_orthocarpa.androecium.filaments = new Filaments()

Mimosa_orthocarpa.ginoecium = new Ginoecium()
Mimosa_orthocarpa.ginoecium.ovary = new Ovary()

Mimosa_orthocarpa.fruit = new Fruit()
Mimosa_orthocarpa.fruit.stipe = new Stipe()
Mimosa_orthocarpa.fruit.replum = new Replum()
Mimosa_orthocarpa.fruit.epicarp = new Epicarp()

Mimosa_orthocarpa.seed = new Seed()


// Description authorship
Mimosa_orthocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_orthocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa orthocarpa
export { Mimosa_orthocarpa }