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


// Description of Mimosa polycarpa
const Mimosa_polycarpa = new Mimosa()
Mimosa_polycarpa.specificEpithet = 'polycarpa'

Mimosa_polycarpa.stems = new Stems()

Mimosa_polycarpa.stipule = new Stipule()
Mimosa_polycarpa.stipule.margin = new MarginStipule()
Mimosa_polycarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_polycarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_polycarpa.leaf = new Leaf()
Mimosa_polycarpa.leaf.petiole = new Petiole()
Mimosa_polycarpa.leaf.bipinnate = new Bipinnate()
Mimosa_polycarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_polycarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_polycarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_polycarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_polycarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_polycarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_polycarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 47)
Mimosa_polycarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_polycarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_polycarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_polycarpa.inflorescence = new Inflorescence()
Mimosa_polycarpa.inflorescence.peduncle = new Peduncle()
Mimosa_polycarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_polycarpa.flower = new Flower()
Mimosa_polycarpa.flower.bracteole = new Bracteole()
Mimosa_polycarpa.flower.merism = '4-merous'
Mimosa_polycarpa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_polycarpa.flower.calyx = new Calyx()
Mimosa_polycarpa.flower.calyx.shape = 'paleaceous'
Mimosa_polycarpa.flower.corolla = new Corolla()

Mimosa_polycarpa.androecium = new Androecium()
Mimosa_polycarpa.androecium.filaments = new Filaments()
Mimosa_polycarpa.androecium.filaments.colour = ['lilac', 'pinkish']

Mimosa_polycarpa.ginoecium = new Ginoecium()
Mimosa_polycarpa.ginoecium.ovary = new Ovary()

Mimosa_polycarpa.fruit = new Fruit()
Mimosa_polycarpa.fruit.stipe = new Stipe()
Mimosa_polycarpa.fruit.replum = new Replum()
Mimosa_polycarpa.fruit.epicarp = new Epicarp()

Mimosa_polycarpa.seed = new Seed()


// Description authorship
Mimosa_polycarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_polycarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa polycarpa
export { Mimosa_polycarpa }