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


// Description of Mimosa filipes
const Mimosa_filipes = new Mimosa()
Mimosa_filipes.specificEpithet = 'filipes'

Mimosa_filipes.stems = new Stems()

Mimosa_filipes.stipule = new Stipule()
Mimosa_filipes.stipule.margin = new MarginStipule()
Mimosa_filipes.stipule.adaxial = new AdaxialStipule()
Mimosa_filipes.stipule.abaxial = new AbaxialStipule()

Mimosa_filipes.leaf = new Leaf()
Mimosa_filipes.leaf.petiole = new Petiole()
Mimosa_filipes.leaf.bipinnate = new Bipinnate()
Mimosa_filipes.leaf.bipinnate.rachis = new Rachis()
Mimosa_filipes.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_filipes.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_filipes.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_filipes.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_filipes.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_filipes.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_filipes.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 22)
Mimosa_filipes.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_filipes.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_filipes.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_filipes.inflorescence = new Inflorescence()
Mimosa_filipes.inflorescence.peduncle = new Peduncle()
Mimosa_filipes.inflorescence.capitate = new CapitateInflorescence()

Mimosa_filipes.flower = new Flower()
Mimosa_filipes.flower.bracteole = new Bracteole()
Mimosa_filipes.flower.merism = '3-merous'
Mimosa_filipes.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_filipes.flower.calyx = new Calyx()
Mimosa_filipes.flower.corolla = new Corolla()
Mimosa_filipes.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_filipes.androecium = new Androecium()
Mimosa_filipes.androecium.filaments = new Filaments()
Mimosa_filipes.androecium.filaments.colour = 'pinkish'

Mimosa_filipes.ginoecium = new Ginoecium()
Mimosa_filipes.ginoecium.ovary = new Ovary()

Mimosa_filipes.fruit = new Fruit()
Mimosa_filipes.fruit.stipe = new Stipe()
Mimosa_filipes.fruit.replum = new Replum()
Mimosa_filipes.fruit.epicarp = new Epicarp()

Mimosa_filipes.seed = new Seed()


// Description authorship
Mimosa_filipes.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_filipes.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa filipes
export { Mimosa_filipes }