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


// Description of Mimosa borealis
const Mimosa_borealis = new Mimosa()
Mimosa_borealis.specificEpithet = 'borealis'

Mimosa_borealis.stems = new Stems()

Mimosa_borealis.stipule = new Stipule()
Mimosa_borealis.stipule.margin = new MarginStipule()
Mimosa_borealis.stipule.adaxial = new AdaxialStipule()
Mimosa_borealis.stipule.abaxial = new AbaxialStipule()

Mimosa_borealis.leaf = new Leaf()
Mimosa_borealis.leaf.petiole = new Petiole()
Mimosa_borealis.leaf.bipinnate = new Bipinnate()
Mimosa_borealis.leaf.bipinnate.rachis = new Rachis()
Mimosa_borealis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_borealis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_borealis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_borealis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_borealis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_borealis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_borealis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_borealis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_borealis.inflorescence = new Inflorescence()
Mimosa_borealis.inflorescence.peduncle = new Peduncle()
Mimosa_borealis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_borealis.flower = new Flower()
Mimosa_borealis.flower.bracteole = new Bracteole()
Mimosa_borealis.flower.merism = ['4-merous', '5-merous']
Mimosa_borealis.flower.calyx = new Calyx()
Mimosa_borealis.flower.calyx.shape = 'turbinate'
Mimosa_borealis.flower.corolla = new Corolla()
Mimosa_borealis.flower.corolla.shape = 'turbinate'

Mimosa_borealis.androecium = new Androecium()
Mimosa_borealis.androecium.filaments = new Filaments()
Mimosa_borealis.androecium.filaments.colour = 'pinkish'

Mimosa_borealis.ginoecium = new Ginoecium()
Mimosa_borealis.ginoecium.ovary = new Ovary()

Mimosa_borealis.fruit = new Fruit()
Mimosa_borealis.fruit.stipe = new Stipe()
Mimosa_borealis.fruit.replum = new Replum()
Mimosa_borealis.fruit.epicarp = new Epicarp()

Mimosa_borealis.seed = new Seed()


// Description authorship
Mimosa_borealis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_borealis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa borealis
export { Mimosa_borealis }